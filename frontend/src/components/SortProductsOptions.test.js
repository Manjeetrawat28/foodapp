
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import SortProductsOptions from './SortProductsOptions'



it('display all sort options  with correct value', () => {
  const setSortPreferece = jest.fn()

  render(<SortProductsOptions setSortPreferece={setSortPreferece} />)

  expect(screen.getByText('Most recent')).toHaveValue('-createdAt')
  expect(screen.getByText('Older')).toHaveValue('createdAt')
  expect(screen.getByText('Lower price')).toHaveValue('price')
  expect(screen.getByText('Higher price')).toHaveValue('-price')
  expect(screen.getByText('Popular')).toHaveValue('-sold')


})

it('to have -createdAt as default value', () => {
  const setSortPreferece = jest.fn();

  render(<SortProductsOptions setSortPreferece={setSortPreferece} />)

  expect(screen.getByRole('combobox')).toHaveDisplayValue('Most recent')

})

it('triggers setSortPreferece function passing the correct value on change', () => {

  const setSortPreferece = jest.fn();

  render(<SortProductsOptions setSortPreferece={setSortPreferece} />)

  fireEvent.change(screen.getByRole('combobox'), {
    target: {
      value: '-sold'
    },
  })
  expect(setSortPreferece.mock.calls.length).toBe(1)

  expect(screen.getByRole('combobox')).toHaveDisplayValue('Popular')

  fireEvent.change(screen.getByRole('combobox'), {
    target: {
      value: '-price'
    },
  })
  expect(setSortPreferece.mock.calls.length).toBe(2)

  expect(screen.getByRole('combobox')).toHaveDisplayValue('Higher price')
})

