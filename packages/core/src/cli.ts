#!/usr/bin/env node
import { Command } from 'commander';
import prompts from 'prompts';
import fs from 'fs-extra';
import path from 'path';
import pc from 'picocolors';

const program = new Command();

program
  .name('starkit')
  .description('CLI to add StarKit components to your project')
  .version('0.1.0');

// All available components
const COMPONENTS = [
  'Button', 'Input', 'Card', 'Badge', 'Modal', 
  'Tabs', 'Toast', 'Dropdown', 'GlitchText',
  'Skeleton', 'FormField', 'Accordion', 'Navbar', 'DataTable'
];

program
  .command('add')
  .description('Add a component to your project')
  .argument('[component]', 'Component name to add')
  .action(async (componentName) => {
    try {
      let selectedComponent = componentName;

      if (!selectedComponent) {
        const response = await prompts({
          type: 'autocomplete',
          name: 'component',
          message: 'Which component would you like to add?',
          choices: COMPONENTS.map(c => ({ title: c, value: c })),
        });
        selectedComponent = response.component;
      }

      if (!selectedComponent) {
        console.log(pc.yellow('No component selected. Exiting.'));
        process.exit(0);
      }

      // Format component name
      const component = COMPONENTS.find(c => c.toLowerCase() === selectedComponent.toLowerCase());
      
      if (!component) {
        console.error(pc.red(`Component "${selectedComponent}" not found.`));
        process.exit(1);
      }

      // Determine where to copy
      const cwd = process.cwd();
      const packageJsonPath = path.join(cwd, 'package.json');
      let isSrcDir = fs.existsSync(path.join(cwd, 'src'));

      // Ask where to install components if we can't figure it out perfectly
      const targetDirPrompt = await prompts({
        type: 'text',
        name: 'dir',
        message: 'Where would you like to place the component?',
        initial: isSrcDir ? 'src/components/starkit' : 'components/starkit'
      });

      const targetDir = path.join(cwd, targetDirPrompt.dir, component);

      // Find the source files inside the installed package
      // The CLI runs from node_modules/starkit/dist/cli.js, so __dirname is dist
      const packageRoot = path.resolve(__dirname, '..');
      const sourceDir = path.join(packageRoot, 'src', 'components', component);

      if (!fs.existsSync(sourceDir)) {
        console.error(pc.red(`Could not find source files for ${component} in ${sourceDir}`));
        process.exit(1);
      }

      // Copy component files
      await fs.ensureDir(targetDir);
      await fs.copy(sourceDir, targetDir);

      // We also need to copy tokens.css and shared.css if they don't exist in the project
      const styleDir = path.join(cwd, isSrcDir ? 'src/styles' : 'styles');
      const tokensSrc = path.join(packageRoot, 'src', 'tokens.css');
      const sharedSrc = path.join(packageRoot, 'src', 'shared.css');
      
      const tokensTarget = path.join(styleDir, 'tokens.css');
      const sharedTarget = path.join(styleDir, 'shared.css');

      if (!fs.existsSync(styleDir)) {
        await fs.ensureDir(styleDir);
      }

      if (!fs.existsSync(tokensTarget) && fs.existsSync(tokensSrc)) {
        await fs.copy(tokensSrc, tokensTarget);
        console.log(pc.green(`Added ${tokensTarget}`));
      }

      if (!fs.existsSync(sharedTarget) && fs.existsSync(sharedSrc)) {
        await fs.copy(sharedSrc, sharedTarget);
        console.log(pc.green(`Added ${sharedTarget}`));
      }

      console.log(pc.green(`✔ Successfully added ${component} to ${targetDirPrompt.dir}/${component}`));
      console.log(pc.cyan(`\nRemember to import tokens.css and shared.css in your main layout/entry file:`));
      console.log(`import '${isSrcDir ? '@/styles/' : '../styles/'}tokens.css';`);
      console.log(`import '${isSrcDir ? '@/styles/' : '../styles/'}shared.css';\n`);
      
    } catch (error) {
      console.error(pc.red('Error adding component:'), error);
      process.exit(1);
    }
  });

program.parse();
