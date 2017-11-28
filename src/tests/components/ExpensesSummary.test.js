import React from 'react';
import { shallow }  from 'enzyme';
import  { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';


test('should render ExpensesSummary correctly', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={255}/>)
  expect(wrapper).toMatchSnapshot();
});


test('should render a paragraph if no expenses are loaded', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={0} expenseTotal={0}/>)
  expect(wrapper.find('p').text()).toBe('There are no expenses.')
});

test('should render a paragraph if one expense is loaded', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={795}/>)
  expect(wrapper.find('p').text()).toBe('Viewing 1 expense totalling $7.95')
});

test('should render a paragraph if expenses are loaded', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expenseTotal={5500}/>)
  
  expect(wrapper.find('p').text()).toBe('Viewing 5 expenses totalling $55.00')
});
