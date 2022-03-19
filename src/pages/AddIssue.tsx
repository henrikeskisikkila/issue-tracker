interface AddIssueProps {
  onSave: () => void;
}

export const AddIssue = ({ onSave }: AddIssueProps) => {
  return (
    <div>
      <h1>Add Issue</h1>
      <button onClick={onSave}>save</button>
    </div>
  );
};
