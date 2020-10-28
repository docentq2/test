import * as React from 'react';
import { Link } from 'react-router-dom';

import { UsersEntities } from '../../types';

interface Props {
  users: UsersEntities;
  userId: string | null;
  hasAttribute?: string | boolean | number;
}

const UserCell: React.FunctionComponent<Props> = ({ userId, users, hasAttribute }: Props): JSX.Element => {
  const user = userId ? users[userId] : undefined;
  
  const border = hasAttribute === true ? 'red' : 'green';

  return (
    <React.Fragment>
      {border ? 
        <div style={{border: '1px solid red'}}>
          {userId === null && 'Автоматическая миграция'}
          {userId !== null && user && (
            <Link title={user.name} to={`/auth/users/${user.id}/edit`} target="_blank">
              {user.name}
            </Link>
          )}
          {userId !== null && !user && `Пользователь с id ${userId} не найден`}
        </div> : 
        <div>
          {userId === null && 'Автоматическая миграция'}
          {userId !== null && user && (
            <Link title={user.name} to={`/auth/users/${user.id}/edit`} target="_blank">
              {user.name}
            </Link>
          )}
          {userId !== null && !user && `Пользователь с id ${userId} не найден`}
        </div>
      
    </React.Fragment>
  );
};

export default UserCell;
