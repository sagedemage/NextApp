import github from 'assets/icons/github.webp';
import linkedin from 'assets/icons/linkedin.webp';

import styles from 'styles/NavigationBar.module.css'

import { Nav, Navbar, Container } from 'react-bootstrap'

export function MyNavBar() {
	return (
			<div className={styles.mb}>
				<Navbar collapseOnSelect expand="lg" bg="myGreen" variant="dark" fixed="top">
					<Container>
						<Navbar.Brand href="/">
							<span className="indent"> Next App </span>
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="responsive-navbar-nav"  />
						<Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="projects"> Projects </Nav.Link>
                            <Nav.Link href="environment"> Environment </Nav.Link>
                        </Nav>
						<Nav className="ms-auto">
							<Nav.Link href="#"> Page 1 </Nav.Link>
                            <Nav.Link href="#"> Page 2 </Nav.Link>
						</Nav>
                    </Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		   );
}
