import React, { useEffect } from "react";
import { FormComponent, FormItem } from "@/shared";
import Form from "rc-field-form";
import { Input } from "@/shared/components/Input";
interface AnswerInformationInterface {
  answer: any;
}
export const AnswerInformation = React.memo(
  ({ answer }: AnswerInformationInterface) => {
    const [form] = Form.useForm();

    return (
      <FormComponent onSubmit={() => {}} form={form}>
        <FormItem initialValue={answer.name} name="name" label="Название">
          <Input type="text" />
        </FormItem>
      </FormComponent>
    );
  }
);
