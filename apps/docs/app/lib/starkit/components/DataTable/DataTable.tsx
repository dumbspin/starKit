import React, {
  forwardRef,
  useState,
  useMemo,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import './datatable.css';

/* ── Types ──────────────────────────────────────────────────── */

export type DataTableSize = 'sm' | 'md' | 'lg';
export type SortDirection = 'asc' | 'desc';

export interface DataTableColumn<T = Record<string, unknown>> {
  /** Unique key matching a field in the data */
  key: string;
  /** Column header label */
  label: ReactNode;
  /** Enable sorting for this column */
  sortable?: boolean;
  /** Custom cell renderer */
  render?: (value: unknown, row: T, index: number) => ReactNode;
  /** Column width (CSS value) */
  width?: string;
}

export interface DataTableProps<T = Record<string, unknown>> extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Column definitions */
  columns: DataTableColumn<T>[];
  /** Row data array */
  data: T[];
  /** Unique key field in each row */
  rowKey?: string;
  /** Enable row selection with checkboxes */
  selectable?: boolean;
  /** Currently selected row keys */
  selectedKeys?: string[];
  /** Selection change callback */
  onSelectionChange?: (selectedKeys: string[]) => void;
  /** Striped rows */
  striped?: boolean;
  /** Size preset */
  size?: DataTableSize;
  /** Enable client-side pagination */
  pageSize?: number;
  /** Empty state message */
  emptyText?: string;
  /** Actions column renderer */
  renderActions?: (row: T, index: number) => ReactNode;
}

/* ── Component ──────────────────────────────────────────────── */

function DataTableInner<T extends Record<string, unknown>>(
  {
    columns,
    data,
    rowKey = 'id',
    selectable = false,
    selectedKeys: controlledSelectedKeys,
    onSelectionChange,
    striped = false,
    size = 'md',
    pageSize,
    emptyText = 'No data',
    renderActions,
    className = '',
    ...rest
  }: DataTableProps<T> & { className?: string },
  ref: React.ForwardedRef<HTMLDivElement>
) {
  /* ── Sort state ──────────────────────────────────────────── */
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDirection>('asc');

  /* ── Selection state ─────────────────────────────────────── */
  const [internalSelectedKeys, setInternalSelectedKeys] = useState<string[]>([]);
  const selected = controlledSelectedKeys ?? internalSelectedKeys;

  const setSelected = useCallback(
    (keys: string[]) => {
      if (!controlledSelectedKeys) setInternalSelectedKeys(keys);
      onSelectionChange?.(keys);
    },
    [controlledSelectedKeys, onSelectionChange]
  );

  /* ── Pagination state ────────────────────────────────────── */
  const [currentPage, setCurrentPage] = useState(1);

  /* ── Sorted data ─────────────────────────────────────────── */
  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal == null) return 1;
      if (bVal == null) return -1;
      const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true });
      return sortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDir]);

  /* ── Paginated data ──────────────────────────────────────── */
  const totalPages = pageSize ? Math.max(1, Math.ceil(sortedData.length / pageSize)) : 1;
  const displayData = pageSize
    ? sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)
    : sortedData;

  /* ── Handlers ────────────────────────────────────────────── */

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  };

  const getRowKey = (row: T, idx: number): string => {
    return row[rowKey] != null ? String(row[rowKey]) : String(idx);
  };

  const handleSelectAll = () => {
    if (selected.length === displayData.length) {
      setSelected([]);
    } else {
      setSelected(displayData.map((row, i) => getRowKey(row, i)));
    }
  };

  const handleSelectRow = (key: string) => {
    if (selected.includes(key)) {
      setSelected(selected.filter((k) => k !== key));
    } else {
      setSelected([...selected, key]);
    }
  };

  /* ── Classes ─────────────────────────────────────────────── */

  const wrapperClass = [
    'brut-datatable',
    size !== 'md' ? `brut-datatable--${size}` : '',
    striped ? 'brut-datatable--striped' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const allColumns = renderActions
    ? [...columns, { key: '__actions', label: 'Actions' as ReactNode } as DataTableColumn<T>]
    : columns;

  return (
    <div ref={ref} className={wrapperClass} {...rest}>
      <div className="brut-datatable__wrapper">
        <table className="brut-datatable__table" role="grid">
          <thead>
            <tr>
              {selectable && (
                <th className="brut-datatable__th brut-datatable__th--checkbox">
                  <input
                    type="checkbox"
                    className="brut-datatable__checkbox"
                    checked={displayData.length > 0 && selected.length === displayData.length}
                    onChange={handleSelectAll}
                    aria-label="Select all rows"
                  />
                </th>
              )}
              {allColumns.map((col) => {
                const isSorted = sortKey === col.key;
                const isSortable = col.sortable === true;

                return (
                  <th
                    key={col.key}
                    className={[
                      'brut-datatable__th',
                      isSortable ? 'brut-datatable__th--sortable' : '',
                      isSorted ? 'brut-datatable__th--sorted' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    style={col.width ? { width: col.width } : undefined}
                    onClick={isSortable ? () => handleSort(col.key) : undefined}
                    onKeyDown={
                      isSortable
                        ? (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              handleSort(col.key);
                            }
                          }
                        : undefined
                    }
                    tabIndex={isSortable ? 0 : undefined}
                    aria-sort={
                      isSorted ? (sortDir === 'asc' ? 'ascending' : 'descending') : undefined
                    }
                    role={isSortable ? 'columnheader' : undefined}
                  >
                    {col.label}
                    {isSortable && (
                      <span className="brut-datatable__sort-icon" aria-hidden="true">
                        {isSorted ? (sortDir === 'asc' ? '▲' : '▼') : '⇅'}
                      </span>
                    )}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {displayData.length === 0 ? (
              <tr>
                <td
                  className="brut-datatable__empty"
                  colSpan={allColumns.length + (selectable ? 1 : 0)}
                >
                  {emptyText}
                </td>
              </tr>
            ) : (
              displayData.map((row, rowIdx) => {
                const key = getRowKey(row, (currentPage - 1) * (pageSize ?? 0) + rowIdx);
                const isSelected = selected.includes(key);

                return (
                  <tr
                    key={key}
                    className={[
                      'brut-datatable__row',
                      isSelected ? 'brut-datatable__row--selected' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    {selectable && (
                      <td className="brut-datatable__td brut-datatable__td--checkbox">
                        <input
                          type="checkbox"
                          className="brut-datatable__checkbox"
                          checked={isSelected}
                          onChange={() => handleSelectRow(key)}
                          aria-label={`Select row ${key}`}
                        />
                      </td>
                    )}
                    {columns.map((col) => (
                      <td key={col.key} className="brut-datatable__td">
                        {col.render
                          ? col.render(row[col.key], row, rowIdx)
                          : (row[col.key] as ReactNode) ?? '—'}
                      </td>
                    ))}
                    {renderActions && (
                      <td className="brut-datatable__td">
                        {renderActions(row, rowIdx)}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pageSize && totalPages > 1 && (
        <div className="brut-datatable__pagination">
          <span className="brut-datatable__pagination-info">
            Page {currentPage} of {totalPages} · {data.length} rows
          </span>
          <div className="brut-datatable__pagination-controls">
            <button
              className="brut-datatable__page-btn"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
              aria-label="First page"
              type="button"
            >
              ««
            </button>
            <button
              className="brut-datatable__page-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              type="button"
            >
              «
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              const startPage = Math.max(
                1,
                Math.min(currentPage - 2, totalPages - 4)
              );
              const page = startPage + i;
              if (page > totalPages) return null;
              return (
                <button
                  key={page}
                  className={`brut-datatable__page-btn${page === currentPage ? ' brut-datatable__page-btn--active' : ''}`}
                  onClick={() => setCurrentPage(page)}
                  aria-current={page === currentPage ? 'page' : undefined}
                  type="button"
                >
                  {page}
                </button>
              );
            })}
            <button
              className="brut-datatable__page-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              type="button"
            >
              »
            </button>
            <button
              className="brut-datatable__page-btn"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
              aria-label="Last page"
              type="button"
            >
              »»
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export const DataTable = forwardRef(DataTableInner) as <T extends Record<string, unknown>>(
  props: DataTableProps<T> & { ref?: React.Ref<HTMLDivElement> }
) => React.ReactElement | null;

(DataTable as { displayName?: string }).displayName = 'DataTable';
