import React from 'react'

const Register = () => {
  return (
    <body>
<div class="container">
	<section id="content">
		<form action="">
			<h1>Registro</h1>
			<div>
				<input type="text" placeholder="Nombre" required="" id="username" />
			</div>
            <div>
				<input type="text" placeholder="Apellido Parterno" required="" id="apellidoP" />
			</div>
            <div>
				<input type="text" placeholder="Apellido Materno" required="" id="apellidoM" />
			</div>
            <div>
				<input type="text" placeholder="Correo" required="" id="correo" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
			<div>
				<input type="submit" value="Registrar" />
				<a href="#">Olvidaste tu contraseña?</a>
			</div>
		</form>	
	</section>
</div>
</body>
  )
}

export default Register;