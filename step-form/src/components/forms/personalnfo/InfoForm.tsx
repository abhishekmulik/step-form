import { PhotoIcon, UserCircleIcon } from "@heroicons/react/16/solid";
import Input from "../../../ui/Input";
import FormLayout from "../formWrapper/FormLayout";


export default function InfoForm() {
    return (
        <FormLayout label="Personal Information">
            <div className="sm:col-span-3">
                <Input label="First name" name="first-name" type="text" />
            </div>

            <div className="sm:col-span-3">
                <Input label="Last name" name="last-name" type="text" />
            </div>

            <div className="sm:col-span-4">
                <Input label="Email" name="email" type="email" />
            </div>

            <div className="col-span-full">
                <Input label="Street Address" name="street-address" type="text" />
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
                <Input label="City" name="city" type="text" />
            </div>

            <div className="sm:col-span-2">
                <Input label="State / Proviance" name="city" type="text" />
            </div>

            <div className="sm:col-span-2">
                <Input label="Zip / Postal code" name="zip" type="number" />
            </div>

        </FormLayout>

    )
}
