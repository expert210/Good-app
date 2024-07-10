import { Input, Prompt } from "@medusajs/ui";

export default function SubmitAppModal({ open, setIsAppModalOpen }) {
  return (
    <Prompt
      variant="confirmation"
      open={open}
    >
      <Prompt.Content>
        <Prompt.Header>
          <Prompt.Title>Submit</Prompt.Title>
          <Prompt.Description style={{ marginBottom: '8px' }}>
            Do you have or use an app that you think deserves to be on this
            list? Submit it below and we will add it.
          </Prompt.Description>
          <div style={{ marginBottom: '4px' }}>
            <Input type="email" placeholder="Email" id="input-id" />
          </div>
          <div>
            <Input type="url" placeholder="App Store URL" id="input-id" />
          </div>
        </Prompt.Header>
        <Prompt.Footer>
          <Prompt.Action
            onClick={() => setIsAppModalOpen(false)}
          >
            Submit
          </Prompt.Action>
        </Prompt.Footer>
      </Prompt.Content>
    </Prompt>
  );
}
