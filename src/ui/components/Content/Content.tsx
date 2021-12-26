import { useStoreState, useStoreActions } from '../../../storio';
import { cls } from './Content.css';

export const Content = () => {
  const [isLoading, title, data] = useStoreState([
    (state: any) => state.isLoading,
    (state: any) => state.tabs.tab.title,
    (state: any) => state.tabs.content.data,
  ]);
  // const addTodo = useStoreActions((actions: any) => actions.todos.addTodo);

  const onClick = () => {
    // addTodo('add1');
  };

 console.log(isLoading, title, data);

  return (
    <div css={cls.container}>
      <button onClick={onClick}>Add Todo</button>
    </div>
  );
};
