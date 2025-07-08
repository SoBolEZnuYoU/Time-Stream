import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { request } from '../../utils';
import styled from 'styled-components';
import { COLOR } from '../../constants';
import { Button } from '../button/button';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, refreshTasks, resetCurrentTask } from '../../actions';
import { ErrorMessage } from '../error-message/error-message';
import { selectCurrentTask } from '../../selectors';

const modalFormSchema = yup.object().shape({
	title: yup.string().max(1500, 'Максимальная длина задачи - 1500 символов'),
});

const InputModalContainer = ({ className }) => {
	const currentTask = useSelector(selectCurrentTask);
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			title: currentTask.title,
		},
		resolver: yupResolver(modalFormSchema),
	});

	const dispatch = useDispatch();

	const onSubmit = ({ title }) => {
		if (currentTask.title) {
			request(`/api/tasks/${currentTask.id}`, 'PATCH', { title });
		} else {
			request('/api/tasks', 'POST', { title });
		}

		reset();
		dispatch(closeModal);
		dispatch(resetCurrentTask);
		dispatch(refreshTasks);
	};

	const onCancel = () => {
		dispatch(closeModal);
		dispatch(resetCurrentTask);
	};

	const formError = errors?.title?.message;

	return (
		<div className={className}>
			<div className="modal">
				<form onSubmit={handleSubmit(onSubmit)}>
					<textarea
						rows="9"
						placeholder="Введите текст"
						{...register('title')}
					></textarea>
					<div className="btn-box">
						{formError && <ErrorMessage>{formError}</ErrorMessage>}
						<Button type="submit" width="200px" style="filled-dark">
							Применить
						</Button>
						<Button width="200px" onClick={onCancel}>
							Отмена
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export const InputModal = styled(InputModalContainer)`
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	z-index: 100;
	backdrop-filter: blur(5px);

	& .modal {
		margin-top: 25vh;
		border: 2px solid ${COLOR.DARK};
		border-radius: 14px;
		background-color: ${COLOR.LIGHT};
		width: 1000px;
		height: fit-content;
	}

	& textarea {
		width: 100%;
		padding: 15px;
		font-size: 24px;
		resize: none;
		border: none;
		border-bottom: 2px solid ${COLOR.DARK};
		border-top-left-radius: 14px;
		border-top-right-radius: 14px;
	}

	& .btn-box {
		width: 100%;
		display: flex;
		justify-content: space-around;
		margin-block: 20px;
	}
`;
