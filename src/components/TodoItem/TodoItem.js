import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
  render() {
    const { done, chidren, onToggle, onRemove } = this.props;
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly />
        <div className={cx('text', { done })}>{chidren}</div>
        <div className={cx('delete')} onClick={onRemove}>[지우기]</div>
      </div>
    )
  }
}

export default TodoItem;