"use client"
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { useToast } from '../ui/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { TrialFormSchema } from '@/Schemas/TrialFormSchema';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';

const TrialForm:React.FC = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof TrialFormSchema>>({
    resolver: zodResolver(TrialFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone:"",
      companyName: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(
    values: z.infer<typeof TrialFormSchema>
  ) {
    setIsLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/starttrial",
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
        <div className="grid grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name={"firstName"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"First Name*"}
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
          name={"lastName"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Last Name*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="mt-[20px] grid grid-cols-2 gap-5">
        <FormField
          control={form.control}
          name={"phone"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Phone Number*"}
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
          name={"companyName"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                Company Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Company Name*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="w-full mt-[20px]">
        <FormField
          control={form.control}
          name={"email"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                Your Email
              </FormLabel>
              <FormControl>
                <Input
                  placeholder={"Your Email*"}
                  {...field}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px]  placeholder:text-textGrey text-[16px] leading-[22px]"
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="w-full mt-[20px]">
        <FormField
          control={form.control}
          name={"message"}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={"text-black text-[16px] font-semibold"}>
                Message
              </FormLabel>
              <FormControl>
              <Textarea
                  placeholder={"Message*"}
                  className="bg-transparent mt-[30px] py-[6px] px-[16px] rounded-none border-[3px]  placeholder:text-textGrey text-[16px] leading-[22px]"
                  {...field}
                />
              </FormControl>
              {/* <FormDescription>Please Enter Full Name.</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        
        <div className=" my-[30px]">
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
  )
}

export default TrialForm