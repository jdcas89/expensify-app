import React from 'react';
import { shallow }  from 'enzyme';
import  ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
  expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submit', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault:() => {}
  });
  expect(wrapper.state('errorMessage').length).toBeGreaterThan(0);
  expect(wrapper.find('p').text()).toBe('You have to provide a description and an amount!')
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'New Description'
  wrapper.find('input').at(0).simulate('change', {
    target:{
      value: value
    }
  });
  expect(wrapper.state('description')).toBe(value);
})

test('should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = 'New text area input'
  wrapper.find('textarea').simulate('change', {
    target:{
      value: value
    },
    persist: () => {}
  });
  expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '23.50'
  wrapper.find('input').at(1).simulate('change', {
    target:{
      value: value
    }
  });
  expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', () => {
  const wrapper = shallow(<ExpenseForm />)
  const value = '23.5000'
  wrapper.find('input').at(1).simulate('change', {
    target:{
      value: value
    }
  });
  expect(wrapper.state('amount')).toBe('');
})