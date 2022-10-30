import React from 'react';

const Contacto = () => {
    return (
        <>
        <div class="container-md">
         <form>
  <fieldset>
    <legend>Para contactarnos complete los siguientes datos:</legend>
 
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>

    
    <div className="form-group">
      <label htmlFor="exampleSelect1" className="form-label mt-4">Quiero consultar acerca de :</label>
      <select className="form-select" id="exampleSelect1">
        <option>Ciudadania</option>
        <option>Actas</option>
        <option>Turnos</option>
        <option>Gestoria</option>
        <option>Aranceles</option>
      </select> 
    </div>
   
    <div className="form-group">
      <label htmlFor="exampleTextarea" className="form-label mt-4">Informacion Adicional</label>
      <textarea className="form-control" id="exampleTextarea" rows={3} defaultValue={""} />
    </div>

    <button type="submit" className="btn btn-primary">Enviar Consulta</button>
  </fieldset>
</form>
</div>

        </>
    );
}

export default Contacto;
