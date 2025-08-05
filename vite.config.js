import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/ecommerce/', // ✅ Required for Apache in /ecommerce/
});
