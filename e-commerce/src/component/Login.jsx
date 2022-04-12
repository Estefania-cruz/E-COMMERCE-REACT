import React from 'react'

const Login = () => {
  return (
<body>
<div class="container">
	<section id="content">
		<form action="">
			<h1>Inicio Sesión</h1>
			<div>
				<input type="text" placeholder="Username" required="" id="username" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
			<div>
				<input type="submit" value="Entrar" />
				<a href="#">Olvidaste tu contraseña?</a>
				<a href="/register">registrarte</a>
			</div>
		</form>	
	</section>
</div>
</body>
  )
}

export default Login;