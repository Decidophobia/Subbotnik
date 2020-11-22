import React, {useState, useRef} from 'react';
import styles from './ModalWindow.module.css';
import {useDispatch} from 'react-redux';
import {fetchAddPollutionAC} from '../../redux/actionCreators';

function ModalWindow(props) {

	const dispatch = useDispatch();
	const description = useRef();


	const [loading, setLoading] = useState(false);
	const [urlImage, setUrlImage] = useState('');

	const uploadImage = async (event) => {
		event.preventDefault();
		const files = event.target.files;

		const data = new FormData();
		data.append('file', files[0]);
		data.append('upload_preset', 'reactimages');
		setLoading(true);

		const res = await fetch('https://api.cloudinary.com/v1_1/dqau98mqw/image/upload', {
			method: 'POST',
			body: data
		});

		const image = await res.json();
		setUrlImage(image.url);

		console.log(urlImage);

	};

	const getDataFromForm = (event) => {
		event.preventDefault();
		console.log(description.current.value);


		const pollution = {
			description: description.current.value,
			photo: urlImage
		};
		dispatch(fetchAddPollutionAC(pollution))
		console.log(pollution);

	};

	return (
		<>
			<div className={ styles.contener }>
				<div className={ styles.donwloadform }>
					<form onSubmit={ getDataFromForm }>
						{/*<button type='submit' className={ styles.donwload }>Загрузить</button>*/ }
						<input onChange={ uploadImage } className={ styles.inpdonwload } type="file" name="file"
							   placeholder="Загрузите фотографию"/>
						<button className={ styles.close } onClick={ props.closeModal }>X</button>
				{/*	</form>*/}
				{/*</div>*/}
				{/*<div className={ styles.saveform }>*/}
					{/*<form>*/}

            <textarea
				className={ styles.textdescription }
				ref={ description }
				cols="30"
				rows="5"
				placeholder="Введите описание..."
			/>
						<button type='submit' className={ styles.save }>Cохранить</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ModalWindow;
