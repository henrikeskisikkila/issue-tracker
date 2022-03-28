import { AuthDialog } from "pages/AuthDialog";

export const CreateAccount = () => {
  return <AuthDialog open={true} header={"Create an account"} />;
};
