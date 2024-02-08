import { fetchPaymentGroups } from "./paymentGroups";
import { fetchGroups } from "./userGroups";
import { fetchUsers } from "./users";

export async function fetchData(
  {
    setLoading,
    setError,
    setToken,
    setUser,
    setUsers,
    setGroups,
    setPaymentGroups,
  },
  token
) {
  if (setLoading) {
    setLoading(true);
  }
  const users = await fetchUsers(setToken, setUser, token);
  const userGroups = await fetchGroups(setToken, setUser, token);
  const paymentGroups = await fetchPaymentGroups(setToken, setUser, token);

  if (users.error) {
    setError(users.errorMessage);
    return;
  }
  if (userGroups.error) {
    setError(userGroups.errorMessage);
    return;
  }
  if (paymentGroups.error) {
    setError(paymentGroups.errorMessage);
    return;
  }

  setUsers(users.data);
  setGroups(userGroups.data);
  setPaymentGroups(paymentGroups.data);

  if (setLoading) {
    setLoading(false);
  }
}
