import Error from '../components/Error';

export default function NotFoundView() {
  return <Error errorContent="404 Page is not found..." />;
}

// import { Route } from 'react-router-dom';
// import HomeView from '../views/HomeView.js';

// export default function NotFoundView() {
//   return (
//     <Route path="/">
//       <HomeView />
//     </Route>
//   );
// }
