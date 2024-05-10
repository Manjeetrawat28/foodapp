
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react'
import FilterProductsStateOptions from './FilterProductsStateOptions'

const setStatePreferece = jest.fn();
beforeEach(() => render(<FilterProductsStateOptions setStatePreferece={setStatePreferece}

/>))

it('has "all" as a default value', () => {


  expect(screen.getByText('all')).toHaveValue('all')

  expect(screen.getByRole('combobox')).toHaveDisplayValue('Todos')

})

it('display all products states options with correct value', () => {

  expect(screen.getByText('Active')).toHaveValue('active')
  expect(screen.getByText('Inactive')).toHaveValue('inactive')



})


it('trigger setter function with the correct value and set page', () => {

  fireEvent.change(screen.getByRole('combobox'), {
    target: {
      value: 'inactive'
    },
  })
  expect(setStatePreferece.mock.calls.length).toBe(1)

  expect(screen.getByRole('combobox')).toHaveDisplayValue('Inactive')

  fireEvent.change(screen.getByRole('combobox'), {
    target: {
      value: 'active'
    },
  })

  expect(setStatePreferece.mock.calls.length).toBe(2)


  expect(screen.getByRole('combobox')).toHaveDisplayValue('Active')

})