import * as React from 'react';
import { Link } from 'react-router-dom';

import { UsersEntities } from '../../types';

interface Props {
  users: UsersEntities;
  userId: string | null;
}

const UserCell: React.FunctionComponent<Props> = ({ userId, users }: Props): JSX.Element => {
  const user = userId ? users[userId] : undefined;

  return (
    <React.Fragment>
      {userId === null && 'Автоматическая миграция'}
      {userId !== null && user && (
        <Link title={user.name} to={`/auth/users/${user.id}/edit`} target="_blank">
          {user.name}
        </Link>
      )}
      {userId !== null && !user && `Пользователь с id ${userId} не найден`}
    </React.Fragment>
  );
};

export default UserCell;
