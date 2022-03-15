import { AuthDialog } from "components/AuthDialog";

export const CreateAccount = () => {
  return <AuthDialog open={true} header={"Create an account"} />;
};
