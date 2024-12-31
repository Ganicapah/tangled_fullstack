import Modal from "@/components/ui/modal";
import { zodResolver } from "@hookform/resolvers/zod";
import useHooks from "@/hooks/use-hooks-modal-dialog";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { Button } from "../button";
import { useState } from "react";
import toast from "react-hot-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function UseDialog() {
  const useHooksModel = useHooks();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const response = await axios.post("/api/stores", values);
      console.log(response);
      toast.success("Data Berhasil Ditambahkan");
    } catch (error) {
      toast.error("Data Gagal Ditambahkan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      name="tes name"
      description="tes descripsi"
      onClose={useHooksModel.onOpen}
      onOpen={useHooksModel.isOpen}
    >
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Nama Toko" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end space-x-2">
              <Button
                variant={"outline"}
                disabled={loading}
                onClick={useHooksModel.onClose}
                type="button"
              >
                Cancel
              </Button>
              <Button disabled={loading} type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  );
}
