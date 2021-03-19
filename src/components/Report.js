import React, { useState } from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

import { isAuthenticated, newReport } from "../apiCore";

const Report = () => {
  const [values, setValues] = useState({
    presion_soplador: 0,
    flujo_alim: 0,
    flujo_ret: 0,
    flujo_desnatador: 0,
    flujo_tr: 0,
    bombas: false,
    limpieza_clarificador: false,
    limpieza_carcamo: false,
    limpieza_criba: false,
    limpieza_filtros: false,
    limpieza_clorador: false,
    limpieza_cisterna: false,
    limpieza_rototamiz: false,
    ph_entrada: 0,
    ph_salida: 0,
    cloro_salida: 0,
    dato_1: 0,
    dato_2: 0,
    dato_3: 0,
    dato_4: 0,
    dato_5: 0,
    dato_6: 0,
    desecho_lodos: false,
    disposicion_lodos: false,
    grasa_sopladores: false,
    aceite_sopladores: false,
    grasa_rototamiz: false,
    aceite_rototamiz: false,
    pastillas_cloro: 0,
    comentarios: 0,
    error: false,
    success: false,
  });
  const { user } = isAuthenticated();
  const {
    presion_soplador,
    flujo_alim,
    flujo_ret,
    flujo_desnatador,
    flujo_tr,
    bombas,
    limpieza_clarificador,
    limpieza_carcamo,
    limpieza_criba,
    limpieza_filtros,
    limpieza_clorador,
    limpieza_cisterna,
    limpieza_rototamiz,
    ph_entrada,
    ph_salida,
    cloro_salida,
    dato_1,
    dato_2,
    dato_3,
    dato_4,
    dato_5,
    dato_6,
    desecho_lodos,
    disposicion_lodos,
    grasa_sopladores,
    aceite_sopladores,
    grasa_rototamiz,
    aceite_rototamiz,
    pastillas_cloro,
    comentarios,
    success,
    error,
  } = values;

  const printValues = (v) => {
    console.log(v);
  };

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const handleChangeCheckboxes = (n) => (e) => {
    setValues({ ...values, [n]: e.target.checked });
    printValues(values);
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    newReport({
      operador: user._id,
      planta: "602c7188420f2c4880667fd8",
      ...values,
    }).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error, success: false });
        setTimeout(() => {
          setValues({ ...values, error: false });
        }, 5000);
      } else {
        setValues({
          ...values,
          success: true,
        });
        setTimeout(() => {
          setValues({
            ...values,
            success: false,
          });
        }, 5000);
      }
    });
  };
  const reportTitle = "Reporte de operación";
  const reportForm = () => (
    <form className="reportform">
      <h4 className="reportform__subtitle">Revision de rutina</h4>
      <div className="reportform__group">
        <label className="reportform__label">Presión soplador</label>
        <input
          onChange={handleChange("presion_soplador")}
          type="number"
          className="reportform__input"
          value={presion_soplador}
          autoComplete="off"
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Flujo de alimentación</label>
        <input
          onChange={handleChange("flujo_alim")}
          type="number"
          className="reportform__input"
          value={flujo_alim}
          autoComplete="off"
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Flujo de retorno</label>
        <input
          onChange={handleChange("flujo_ret")}
          type="number"
          className="reportform__input"
          value={flujo_ret}
          autoComplete="off"
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Flujo de desnatador</label>
        <input
          onChange={handleChange("flujo_desnatador")}
          type="number"
          className="reportform__input"
          value={flujo_desnatador}
          autoComplete="off"
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Flujo lodos a T.R</label>
        <input
          onChange={handleChange("flujo_tr")}
          type="number"
          className="reportform__input"
          value={flujo_tr}
          autoComplete="off"
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Bombas en operación</label>
        <input
          onChange={handleChangeCheckboxes("bombas")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={bombas}
        />
      </div>
      <h4 className="reportform__subtitle">Limpieza</h4>
      <div className="reportform__group">
        <label className="reportform__label">Paredes de clarificador</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_clarificador")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_clarificador}
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Cárcamo de regulación</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_carcamo")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_carcamo}
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Criba de cárcamo</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_criba")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_criba}
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Filtro y prefiltro</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_filtros")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_filtros}
        />
      </div>

      <div className="reportform__group">
        <label className="reportform__label">Clorador</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_clorador")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_clorador}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Cisterna de agua tratada</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_cisterna")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_cisterna}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Rototamiz</label>
        <input
          onChange={handleChangeCheckboxes("limpieza_rototamiz")}
          type="checkbox"
          className="reportform__input"
          defaultChecked={limpieza_rototamiz}
        />
      </div>
      <h4 className="reportform__subtitle">Mediciones</h4>
      <div className="reportform__group">
        <label className="reportform__label">PH en entrada</label>
        <input
          onChange={handleChange("ph_entrada")}
          type="number"
          className="reportform__input"
          value={ph_entrada}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">PH en salida</label>
        <input
          onChange={handleChange("ph_salida")}
          type="number"
          className="reportform__input"
          value={ph_salida}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Cloro en salida</label>
        <input
          onChange={handleChange("cloro_salida")}
          type="number"
          className="reportform__input"
          value={cloro_salida}
          autoComplete="off"
        />
      </div>
      <h4 className="reportform__subtitle">Gráfica de sedimentación</h4>
      <div className="reportform__group">
        <label className="reportform__label">5 min</label>
        <input
          onChange={handleChange("dato_1")}
          type="number"
          className="reportform__input"
          value={dato_1}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">10 min</label>
        <input
          onChange={handleChange("dato_2")}
          type="number"
          className="reportform__input"
          value={dato_2}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">15 min</label>
        <input
          onChange={handleChange("dato_3")}
          type="number"
          className="reportform__input"
          value={dato_3}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">20 min</label>
        <input
          onChange={handleChange("dato_4")}
          type="number"
          className="reportform__input"
          value={dato_4}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">25 min</label>
        <input
          onChange={handleChange("dato_5")}
          type="number"
          className="reportform__input"
          value={dato_5}
          autoComplete="off"
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">30 min</label>
        <input
          onChange={handleChange("dato_6")}
          type="number"
          className="reportform__input"
          value={dato_6}
          autoComplete="off"
        />
      </div>
      <h4 className="reportform__subtitle">Desechos</h4>
      <div className="reportform__group">
        <label className="reportform__label">Desecho de lodos</label>
        <input
          onChange={handleChangeCheckboxes("desecho_lodos")}
          type="checkbox"
          className="reportform__input"
          checked={desecho_lodos}
          defaultChecked={false}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Disposicion de lodos</label>
        <input
          onChange={handleChangeCheckboxes("disposicion_lodos")}
          type="checkbox"
          className="reportform__input"
          checked={disposicion_lodos}
          defaultChecked={false}
        />
      </div>
      <h4 className="reportform__subtitle">Mantenimiento preventivo</h4>
      <div className="reportform__group">
        <label className="reportform__label">Grasa en sopladores</label>
        <input
          onChange={handleChangeCheckboxes("grasa_sopladores")}
          type="checkbox"
          className="reportform__input"
          checked={grasa_sopladores}
          defaultChecked={false}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Aceite en sopladores</label>
        <input
          onChange={handleChangeCheckboxes("aceite_sopladores")}
          type="checkbox"
          className="reportform__input"
          checked={aceite_sopladores}
          defaultChecked={false}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Grasa en rototamiz</label>
        <input
          onChange={handleChangeCheckboxes("grasa_rototamiz")}
          type="checkbox"
          className="reportform__input"
          checked={grasa_rototamiz}
          defaultChecked={false}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Aceite en rototamiz</label>
        <input
          onChange={handleChangeCheckboxes("aceite_rototamiz")}
          type="checkbox"
          className="reportform__input"
          checked={aceite_rototamiz}
          defaultChecked={false}
        />
      </div>
      <div className="reportform__group">
        <label className="reportform__label">Pastillas de cloro</label>
        <input
          onChange={handleChange("pastillas_cloro")}
          type="number"
          className="reportform__input"
          value={pastillas_cloro}
          autoComplete="off"
        />
      </div>
      <h4 className="reportform__subtitle">Comentarios</h4>
      <div className="reportform__group_comentarios">
        <input
          onChange={handleChange("comentarios")}
          type="text"
          className="reportform__comentarios"
          value={comentarios}
          autoComplete="off"
        />
      </div>
      <button onClick={clickSubmit} className="form__button">
        Guardar
      </button>
    </form>
  );

  const showError = () => (
    <div className="error" style={{ display: error ? "" : "none" }}>
      {error}
    </div>
  );

  const showSuccess = () => (
    <div className="success_report" style={{ display: success ? "" : "none" }}>
      Reporte generado con exito!!
    </div>
  );

  const redirectUser = () => {
    if (isAuthenticated()) {
      if (user.role === 0) {
        return <Redirect to="/operador" />;
      } else if (user.role === 1) {
        return <Redirect to="/supervisor" />;
      } else if (user.role === 2) {
        return <Redirect to="/admin" />;
      }
    } else {
      return <Redirect to="/login" />;
    }
  };

  return (
    <>
      <Navbar />
      <div className="reportContainer">
        <h2 className="reportform__title">{reportTitle}</h2>
        <h1 className="reportform__user">Usuario: {user.name}</h1>
        {userNav()}
        {redirectUser()}
        {reportForm()}
        {showError()}
        {showSuccess()}
      </div>
    </>
  );
};

export default Report;
