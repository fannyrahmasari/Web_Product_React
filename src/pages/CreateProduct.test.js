import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import CreateProduct from './CreateProduct';

describe('Validasi Form Input', () => {
  it('seharusnya memunculkan pesan kesalahan ketika Product Name kosong', async () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);
    const productNameInput = getByLabelText('Product Nama');

    fireEvent.change(productNameInput, { target: { value: '' } });
    fireEvent.submit(productNameInput);

    await waitFor(() => {
      const errorElement = getByText('Please enter a valid product name.');
      expect(errorElement).toBeInTheDocument();
    });
  });

  it('seharusnya memunculkan pesan kesalahan ketika Product Name melebihi 25 karakter', async () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);
    const productNameInput = getByLabelText('Product Nama');

    fireEvent.change(productNameInput, {
      target: { value: 'Nama Produk yang Sangat Panjang Sekali' },
    });
    fireEvent.submit(productNameInput);

    await waitFor(() => {
      const errorElement = getByText('Please enter a valid product name.');
      expect(errorElement).toBeInTheDocument();
    });
  });

  it('seharusnya memunculkan pesan kesalahan ketika Product Name mengandung karakter khusus', async () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);
    const productNameInput = getByLabelText('Product Nama');

    fireEvent.change(productNameInput, { target: { value: 'Produk@Khusus' } });
    fireEvent.submit(productNameInput);

    await waitFor(() => {
      const errorElement = getByText(
        'Please enter a valid product name without special characters.'
      );
      expect(errorElement).toBeInTheDocument();
    });
  });

  it('seharusnya memunculkan pesan kesalahan ketika semua form field kosong', async () => {
    const { getByText } = render(<CreateProduct />);
    const submitButton = getByText('Submit');

    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorElements = document.querySelectorAll('.error-style');
      expect(errorElements.length).toBeGreaterThan(0);
    });
  });
});
