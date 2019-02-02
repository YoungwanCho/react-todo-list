import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from '../containers/TodoInputContainer';
import TodoList from '../containers/TodoListContainer';

class App extends Component {
  render() {
    return (
      <PageTemplate>
        <TodoInput />
        <TodoList />
      </PageTemplate>
    );
  }
}

export default App;