"use client";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useForm } from 'react-hook-form';
import { ContactUsFormSchema } from "@/Schemas/ContactUsSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';
import axios from "axios";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";


const ContactUsForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof ContactUsFormSchema>>({
    resolver: zodResolver(ContactUsFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof ContactUsFormSchema>
  ) {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/contactus",
        values
      );

      // console.log("Result =>", data.status);
      if (data.status === "Sent") {
        console.log(data.status)
        toast({
          title: "Success",
          description:
            "Thank you for contacting us. We will be with you shortly.",
          variant: "success",
        });
      } else {
        toast({
          title: "Something went Wrong.",
          description:
            "There was an error during Email. Please Try Again Later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: 'Error Sending Email',
        description: 'There was an error during Email. Please Try Again Later.',
        variant: 'destructive',
      });
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="form_container">
        <div className="grid grid-cols-2 gap-2">
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={"text-black text-[16px] font-semibold"}>
                First Name
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Name*"}
                  {...field}
                  className="bg-white py-[6px] px-[16px] rounded-none border-[3px] border-[#B1B1B1]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"phone"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={"text-black text-[16px] font-semibold"}>
                First Name
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Phone Number*"}
                  {...field}
                  className="bg-white py-[6px] px-[16px] rounded-none border-[3px] border-[#B1B1B1]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        
        </div>
        <div className="mt-[10px] w-full">
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={"text-black text-[16px] font-semibold"}>
                Phone Number
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Email*"}
                  {...field}
                  className="bg-white py-[6px] px-[16px] rounded-none border-[3px] border-[#B1B1B1]  placeholder:text-textGrey text-[16px] leading-[22px]"
                  type="email"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="w-full mt-[10px]">
        <FormField
          control={form.control}
          name={"message"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={"text-black text-[16px] font-semibold"}>
                Message
              </FormLabel> */}
              <FormControl>
              <Textarea
                  placeholder={"Message*"}
                  className="bg-white  py-[6px] px-[16px] rounded-none border-[3px] border-[#B1B1B1]  placeholder:text-textGrey focus-visible:ring-red text-[16px] leading-[22px]"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        
        <div className=" my-[10px]">
          <Button
            type="submit"
            className="w-fit mx-auto rounded-none bg-red hover:bg-black text-white text-[20px] leading-[20px] py-4 px-[30px]"
            disabled={isLoading}
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ContactUsForm;
