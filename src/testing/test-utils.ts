import {
  render,
  screen,
  waitFor,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

import { AppProvider } from '@/providers/app';
import { Entity } from '@/types';

export const renderWithApp = (ui: ReactElement) => {
  return render(ui, {
    wrapper: AppProvider,
  });
};

export const checkTableValues = <T extends Entity>({
  columns,
  data,
  container,
}: {
  container?: HTMLElement;
  data: T[];
  columns: Array<keyof T>;
}) => {
  data.forEach((entry, index) => {
    const selector = container
      ? within(container)
      : screen;
    const row = selector.getByTestId(
      `table-row-${index}`
    );

    columns.forEach((column) => {
      const cell = within(row).getByRole('cell', {
        name: String(entry[column]),
      });

      expect(cell).toBeInTheDocument();
    });
  });
};

export const waitForLoadingToFinish = () => {
  return waitFor(
    () => {
      const loaders = [
        ...screen.queryAllByTestId(/loading/i),
        ...screen.queryAllByText(/loading/i),
      ];

      loaders.forEach((loader) => {
        expect(loader).not.toBeInTheDocument();
      });
    },
    {
      timeout: 2000,
    }
  );
};

export * from '@testing-library/react';

const user = userEvent.setup();
export { user };
