import { useRoutes } from 'react-router-dom';
import App from '../App';


export function Router() {
  const element = useRoutes([
     {
       path: '/',
       element: App
     }
  ]);
  return element;
}
