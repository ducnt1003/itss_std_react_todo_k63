/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import {useState} from 'react';
function TodoItem( {item,onClickItem}  ) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <label className="panel-block">
      <input onClick={handleClick} type="checkbox"/>
      <span className={isActive?'has-text-grey-light':''}>{item.text}</span>
    </label>
  );
}

export default TodoItem;