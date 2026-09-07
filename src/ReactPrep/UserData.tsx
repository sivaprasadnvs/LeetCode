import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './UserData.module.scss';

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type UseUsersResult = {
  users: User[];
  loading: boolean;
  error: string | null;
};

export function useUsers(): UseUsersResult {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
      } catch {
        setError('Unable to load users. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, loading, error };
}

export default function UserData() {
  const { users, loading, error } = useUsers();

  if (loading) {
    return <main className={styles.usersPage}><p className={styles.usersStatus}>Loading users...</p></main>;
  }

  if (error) {
    return <main className={styles.usersPage}><p className={styles.usersStatus} role="alert">{error}</p></main>;
  }

  return (
    <main className={styles.usersPage}>
      <section className={styles.usersPanel} aria-labelledby="users-heading">
        <p className={styles.eyebrow}>ReactPrep / Axios</p>
        <h1 id="users-heading">User directory</h1>
        <p className={styles.usersIntro}>User data loaded through a reusable custom hook.</p>
        <ul className={styles.usersList}>
        {users.map((user) => (
          <li key={user.id}>
            <span className={styles.userNumber}>{String(user.id).padStart(2, '0')}</span>
            <div>
              <strong>{user.name}</strong>
              <span>@{user.username}</span>
            </div>
            <a href={`mailto:${user.email}`}>{user.email}</a>
          </li>
        ))}
        </ul>
      </section>
    </main>
  );
}
