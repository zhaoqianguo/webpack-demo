import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Input, List, Row } from 'antd';
import { addTodo, todoDone, changeShowTodoType, type Todo, type ShowTodoType } from '@/store/reducers/todoListReducer';
import type { RootState } from '@/store';
import css from './style.less';

export const TodoList = () => {
  const [state, setState] = useState('');

  const list = useSelector((state: RootState) => state.todoList.todos);
  const filterType = useSelector((state: RootState) => state.todoList.showTodoType);

  const filteredList: Todo[] = list.filter((i) => {
    if (filterType === 'all') return true;
    if (filterType === 'completed') return i.completed;
    if (filterType === 'incomplete') return !i.completed;
  });

  const dispatch = useDispatch();

  const handleClick = () => {
    if (!state) return;
    dispatch(addTodo(state));
    setState('');
  };

  const handleDone = (item: Todo) => {
    dispatch(todoDone(item));
  };

  const handleFilterChange = (filterType: ShowTodoType) => {
    dispatch(changeShowTodoType(filterType));
  };

  return (
    <div className={css.content}>
      <h1 className={css.title}>TODO-LIST</h1>
      <Row className={css.input}>
        <Col span={4}>
          <Input value={state} onChange={(e) => setState(e.target.value)} />
        </Col>
        <Col offset={1}>
          <Button type="primary" onClick={handleClick}>
            Add Todo
          </Button>
          <Button onClick={() => handleFilterChange('all')}>Show All</Button>
          <Button onClick={() => handleFilterChange('completed')}>Show ✅</Button>
          <Button onClick={() => handleFilterChange('incomplete')}>Show ❌</Button>
        </Col>
      </Row>
      <List
        className={css.todoList}
        itemLayout="horizontal"
        dataSource={filteredList}
        bordered
        split
        renderItem={(item) => (
          <List.Item
            actions={
              item.completed
                ? []
                : [
                    <Button key="list-loadmore-edit" onClick={() => handleDone(item)}>
                      done
                    </Button>,
                  ]
            }
          >
            <List.Item.Meta title={item.value} description={`状态： ${item.completed ? '✅' : '❌'}`} />
          </List.Item>
        )}
      />
    </div>
  );
};
