"use client";
import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DiscountCodeRegistrationFormSchema } from "@/Schemas/DiscountCodeRegistrationFormSchema";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import axios from "axios";
import { useToast } from "../ui/use-toast";

const DiscountCodeRegistrationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof DiscountCodeRegistrationFormSchema>>({
    resolver: zodResolver(DiscountCodeRegistrationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      endpoints: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof DiscountCodeRegistrationFormSchema>
  ) {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/getdiscount",
        values
      );

      // console.log("Result =>", data.status);
      if (data.status === "Sent") {
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
        <FormField
          control={form.control}
          name={"name"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={darkmode ? '' : 'text-white'}>
                {label}
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Your Name*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={darkmode ? '' : 'text-white'}>
                {label}
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Your Email*"}
                  type="email"
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px] placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"companyName"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={darkmode ? '' : 'text-white'}>
                {label}
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Company Name*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px] placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={"endpoints"}
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className={darkmode ? '' : 'text-white'}>
                {label}
              </FormLabel> */}
              <FormControl>
                <Input
                  placeholder={"Number of Endpoints Managed*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px] placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-center my-[30px]">
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

export default DiscountCodeRegistrationForm;
