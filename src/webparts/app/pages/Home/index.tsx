import * as React from 'react';
import { useEffect } from 'react';
import { IAppProps } from '../../interfaces/IAppProps';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../dataflow/store';
import { IModuloItemsFormated } from '../../interfaces/IModuloItems';
import { ModuloClassService } from '../../../app/services/ModuloClassServices';

const Home: React.FC<IAppProps> = (props): JSX.Element => {
  const moduloStateGlobal: IModuloItemsFormated[] = useSelector((state: RootState) => state.state);
  const moduloService = new ModuloClassService();
  console.log('moduloStateGlobal', moduloStateGlobal);

  const handleSaveTeste = () => {
    moduloService.createModulos({
      ConteudoTema: 'sasadsdsdsds',
      // Icone: "sasas",
      // Author: datalook,
      // Corredor: [{Id: 1}],
      Nome: `${Math.random().toString(36).substr(2, 9)}`,
    });
  };

  useEffect(() => {
    if (moduloStateGlobal.length < 1) {
      console.log('Zero burrice');
      moduloService.getAllModulos();
    }
  }, []);

  return (
    <>
      <div>
        <Link to="/sobre">sobre</Link>
        <button onClick={() => handleSaveTeste()}>SaveListModulo</button>
      </div>
      <div>
        {moduloStateGlobal &&
          moduloStateGlobal.length > 0 &&
          moduloStateGlobal.map((item) => (
            <>
              <img src={item.Icone} alt="logo" />
              <h4>{item.Author}</h4>
            </>
          ))}
      </div>
    </>
  );
};

export default Home;
