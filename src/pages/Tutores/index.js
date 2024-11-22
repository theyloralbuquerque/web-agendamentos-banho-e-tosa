import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/GlobalStyles';
import { ProfilePicture, TutorContainer } from './styled';
import axios from '../../services/axios';

export default function Tutores() {
  const [tutores, setTutores] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get('/tutores');

      setTutores(response.data);
    }
    getData();
  }, []);
  return (
    <Container>
      <h1>Tutores</h1>
      <TutorContainer>
        {tutores.map((tutor) => (
          <div key={String(tutor.id)}>
            <ProfilePicture>
              {get(tutor, 'Fotos[0].url', false) ? (
                <img crossOrigin="anonymous" src={tutor.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{tutor.nome}</span>
            <span>{tutor.telefone}</span>

            <Link to={`/tutor/${tutor.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`/tutor/${tutor.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </TutorContainer>
    </Container>
  );
}
