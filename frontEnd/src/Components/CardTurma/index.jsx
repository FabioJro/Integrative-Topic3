import React, { useEffect, useState } from 'react'
import Style from './CardLogin.module.css'
import FindTeams from '../../hooks/FindTeams'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom';

const index = () => {
 
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState('');
    const [turmaList, setTurmaList] = useState([
        {
          teamName: 'Turma A',
          teamGlbAvg: 7,
          teamFqcAvg: 85,
          enrolledStudents: 30,
          numberOfDisciplines: 5
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma B',
          teamGlbAvg: 5.5,
          teamFqcAvg: 90,
          enrolledStudents: 25,
          numberOfDisciplines: 4
        },
        {
          teamName: 'Turma C',
          teamGlbAvg: 4.5,
          teamFqcAvg: 70,
          enrolledStudents: 20,
          numberOfDisciplines: 3
        }
      ]);

    useEffect(() => {
        const user = Cookies.get('user');
        const getTurma = async (user) => {
            const turmaResponse = await FindTeams(user);
           // setTurmaList(turmaResponse);
        };  
        getTurma(user);
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
        e.preventDefault();
        // Filtrar as turmas com base no valor do input
        // const filteredTurmas = turmas.filter((turma) =>
            //     turma.teamName.toLowerCase().includes(e.target.value.toLowerCase())
        // );
        // setTurmaList(filteredTurmas);
    };
    
    const submitCard = (turma) => {
        
        const turmaString = JSON.stringify(turma);
        localStorage.setItem('turma', turmaString);
        navigate('/turma');
    };

    return (
        <section className={Style.body}>
            {console.log(turmaList)}
            <section className={Style.sectionCard}>
                <input
                    className={Style.inputFindTurma}
                    type="text"
                    placeholder='Encontre a turma'
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <section className={Style.bodyCard}>
                    {turmaList && turmaList.map((turma, index) => (
                        <div 
                            className={`${Style.card} ${turma.teamGlbAvg < 6 ? Style.redBorder : turma.teamGlbAvg >= 5 && turma.teamGlbAvg <= 7 ? Style.yellowBorder : ''}`} 
                            key={index} 
                            onClick={() => { submitCard(turma); }}
                        >
                            <div className={Style.bodyCardTurma}>
                                <section className={Style.detailsCardTurma}>
                                    <p>Media: {turma.teamGlbAvg}</p>
                                    <p>Frequencia: {turma.teamFqcAvg}%</p>
                                    <p>Alunos cadastrados: {turma.enrolledStudents}</p>
                                    <p>Numero de Disciplinas: {turma.numberOfDisciplines}</p>
                                </section>
                            </div>
                            <div className={Style.footerCard}>
                                <p className={Style.tilteCard}>{turma.teamName}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </section>
        </section>
    );
};

export default index;