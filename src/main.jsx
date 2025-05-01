import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';
import './index.css';
import { TimeStream } from './Time-Stream';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			<TimeStream />
		</BrowserRouter>
	</StrictMode>,
);
