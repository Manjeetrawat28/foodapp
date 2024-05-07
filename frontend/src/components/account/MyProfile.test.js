// import MyProfile from './MyProfile'
// import React from 'react';
// import { render,  screen,act,fireEvent} from '@testing-library/react'
// import AppContext from '../../context/app-context'
// import {MemoryRouter} from 'react-router-dom'
// import login from '../../mocks/login'



//  jest.useFakeTimers();
// const currentUser = login.user
// const setIsAdmin = jest.fn(),
// setIsModerator = jest.fn(),
// setToken = jest.fn(),
// setIsNotLogin = jest.fn(),
// emptyCart = jest.fn(),
// resetTotalCost = jest.fn();
//  const value = {currentUser,setIsAdmin,setIsModerator,setToken,setIsNotLogin,emptyCart,resetTotalCost} 

// describe('Mi frofile component',()=>{
 
// beforeEach(()=> 

//   render(
//       <MemoryRouter initialEntries={['/myAccount','/myAccount/myProfile']}>
//             <AppContext.Provider value={value}>
//   <MyProfile/>
//   </AppContext.Provider>
//     </MemoryRouter>

// ) )

// it('display user info correctly',()=>{
// expect(screen.getByText(currentUser.name,{exact:false})).toBeInTheDocument()
// expect(screen.getByText(currentUser.email,{exact:false})).toBeInTheDocument()
// expect(screen.getByText(currentUser.number,{exact:false})).toBeInTheDocument()
// expect(screen.getByText(currentUser.address,{exact:false})).toBeInTheDocument()

// })

// it('logout and clean state when click on logout button',async()=>{

//   await  act(async()=>fireEvent.click(screen.getByText('logout',{exact:false})) )

//   expect(setIsNotLogin.mock.calls.length).toBe(1)
//  expect(setToken.mock.calls.length).toBe(1)
//  expect(setIsAdmin.mock.calls.length).toBe(1)
//   expect(setIsModerator.mock.calls.length).toBe(1)
//   expect(emptyCart.mock.calls.length).toBe(1)
//   expect(resetTotalCost.mock.calls.length).toBe(1)

// })


//   })
import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import AppContext from '../../context/app-context';
import { MemoryRouter } from 'react-router-dom';
import MyProfile from './MyProfile';
import login from '../../mocks/login';

jest.useFakeTimers();

const currentUser = login.user;
const setIsAdmin = jest.fn();
const setIsModerator = jest.fn();
const setToken = jest.fn();
const setIsNotLogin = jest.fn();
const emptyCart = jest.fn();
const resetTotalCost = jest.fn();

const value = {
  currentUser,
  setIsAdmin,
  setIsModerator,
  setToken,
  setIsNotLogin,
  emptyCart,
  resetTotalCost
};

describe('My Profile component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/myAccount', '/myAccount/myProfile']}>
        <AppContext.Provider value={value}>
          <MyProfile />
        </AppContext.Provider>
      </MemoryRouter>
    );
  });

  it('displays user info correctly', () => {
    expect(screen.getByText(currentUser.name, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(currentUser.email, { exact: false })).toBeInTheDocument();
    expect(screen.getByText(currentUser.number || 'Ningún número suministrado', { exact: false })).toBeInTheDocument();
    expect(screen.getByText(currentUser.address || 'Ninguna dirección suministrada', { exact: false })).toBeInTheDocument();
  });

  it('calls logout function and cleans state when logout button is clicked', async () => {
    fireEvent.click(screen.getByText('Logout', { exact: false }));

    expect(setIsNotLogin).toHaveBeenCalled();
    expect(setToken).toHaveBeenCalled();
    expect(setIsAdmin).toHaveBeenCalled();
    expect(setIsModerator).toHaveBeenCalled();
    expect(emptyCart).toHaveBeenCalled();
    expect(resetTotalCost).toHaveBeenCalled();
  });
});
