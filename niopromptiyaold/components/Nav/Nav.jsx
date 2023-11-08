"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Nav() {
  const isLogged = true;

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setProviders();
  }, []);

  return (
    <div className="w-full">
      <nav className="w-full p-6   flex  justify-between items-center  ">
        <div>
          <h3>Lorem sunt?</h3>
        </div>

        <div>
          {isLogged ? (
            <div>
              <Link className="mr-4" href={"create-post"}>
                Create Post
              </Link>
              <button onClick={signOut}>Sign out</button>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    variant="outlined"
                    onClick={() => signIn(provider.id)}
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>

        {isLogged ? (
          <div>
            {/* <Button
                sx={{
                  mr: "1rem",
                  color: "#fff",
                  borderColor: "orange",
                  "&:hover": {
                    borderColor: "orangered",
                  },
                }}
                variant="outlined"
              >
                Create Post
              </Button>
              <Button
                onClick={signOut}
                sx={{
                  mr: "1rem",
                  color: "#fff",
                  borderColor: "orange",
                  "&:hover": {
                    borderColor: "orangered",
                  },
                }}
                variant="outlined"
              >
                Sign out
              </Button> */}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  type="button"
                  key={provider.name}
                  variant="outlined"
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </Button>
              ))}
          </>
        )}
      </nav>
    </div>
  );
}
export default Nav;
