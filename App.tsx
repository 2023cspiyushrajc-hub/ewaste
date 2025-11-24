import { RouterProvider } from 'react-router';
import { router } from './utils/routes';
import { AuthProvider } from './utils/authContext';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;