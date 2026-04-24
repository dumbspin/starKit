import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable } from '../components/DataTable';

describe('DataTable', () => {
  const columns = [
    { key: 'id', label: 'ID', sortable: true },
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role' },
  ];

  const data = [
    { id: 1, name: 'Alice', role: 'Admin' },
    { id: 2, name: 'Bob', role: 'User' },
    { id: 3, name: 'Charlie', role: 'Editor' },
  ];

  it('renders headers and data rows', () => {
    render(<DataTable columns={columns} data={data} />);
    expect(screen.getByText('ID')).toBeDefined();
    expect(screen.getByText('Name')).toBeDefined();
    expect(screen.getByText('Role')).toBeDefined();
    
    expect(screen.getByText('Alice')).toBeDefined();
    expect(screen.getByText('Bob')).toBeDefined();
    expect(screen.getByText('Charlie')).toBeDefined();
  });

  it('renders empty state when no data', () => {
    render(<DataTable columns={columns} data={[]} emptyText="No records found" />);
    expect(screen.getByText('No records found')).toBeDefined();
  });

  it('handles row selection', () => {
    const onSelectionChange = vi.fn();
    const { container } = render(
      <DataTable 
        columns={columns} 
        data={data} 
        selectable 
        onSelectionChange={onSelectionChange} 
      />
    );
    
    const checkboxes = container.querySelectorAll('.brut-datatable__checkbox');
    expect(checkboxes.length).toBe(4); // 1 header + 3 rows
    
    fireEvent.click(checkboxes[1]); // Click first row
    expect(onSelectionChange).toHaveBeenCalledWith(['1']);
  });

  it('handles sorting', () => {
    render(<DataTable columns={columns} data={data} />);
    
    const nameHeader = screen.getByText('Name').closest('th')!;
    
    // Sort asc
    fireEvent.click(nameHeader);
    expect(nameHeader.getAttribute('aria-sort')).toBe('ascending');
    
    // Sort desc
    fireEvent.click(nameHeader);
    expect(nameHeader.getAttribute('aria-sort')).toBe('descending');
  });

  it('handles pagination', () => {
    const { container } = render(<DataTable columns={columns} data={data} pageSize={2} />);
    
    // First page should show 2 items
    expect(screen.getByText('Alice')).toBeDefined();
    expect(screen.getByText('Bob')).toBeDefined();
    expect(screen.queryByText('Charlie')).toBeNull();
    
    // Next page button
    const nextBtn = screen.getByLabelText('Next page');
    fireEvent.click(nextBtn);
    
    // Second page should show 1 item
    expect(screen.queryByText('Alice')).toBeNull();
    expect(screen.getByText('Charlie')).toBeDefined();
  });
});
