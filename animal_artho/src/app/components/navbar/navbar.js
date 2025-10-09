import { Button } from "../button/button";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50  bg-white shadow-md">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center h-16">
                        <img
                            src="images/logo.png"
                            alt="AnimalOrtho Logo"
                            className="h-16 w-auto max-w-[14rem] object-contain"
                            style={{ maxHeight: "4rem" }}
                        />
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4 transition-colors">
                            Home
                        </a>
                        <a href="/about" className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4 transition-colors">
                            About
                        </a>
                        <a href="/contact" className="text-sm text-muted-foreground hover:text-accent hover:underline underline-offset-4 transition-colors">
                            Contact
                        </a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="inverse" size="sm">
                            Sign in
                        </Button>
                        <Button size="sm" className="bg-accent hover:bg-accent/90">
                            Get Started
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;