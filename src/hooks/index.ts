import {AuthContext} from 'auth/Auth';
import {useContext} from 'react';

// export const useMutation = <TData, TVariables>(
//   mutationTuple: MutationTuple<TData, TVariables>
// ) => {
//   const [mutation, {data, loading, error}] = mutationTuple;
//   useEffect(() => {
//     (async () => {
//       await mutation();
//     })();
//   }, [mutation]);
//   return {
//     data,
//     loading,
//     error: error
//       ? // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         (error.graphQLErrors[0]?.extensions.exception as any).payload
//       : undefined,
//   };
// };
export const useAuth = () => {
  return useContext(AuthContext);
};
