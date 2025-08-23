"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { format, getYear } from "date-fns";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { DatePicker } from "@/components/input-picker/date-picker-input";
import RecentSearchList from "./recent-search-list";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import Link from "next/link";

// interface SearchFormProps {
//   onSearch: (searchText: string, fromDate: string, toDate: string) => void;
// }

export default function SearchForm() {
  const [recentSearches, setRecentSearches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const form = useForm({
    // resolver: zodResolver(searchFormSchema),
    defaultValues: {
      searchText: "",
      fromDate: format(new Date(), "yyyy-MM-dd"),
      toDate: format(new Date(), "yyyy-MM-dd"),
    },
  });

  // Fetch locations from server (simulated)
  // useEffect(() => {
  //   const fetchLocations = async () => {
  //     setIsLoading(true);
  //     try {
  //       // const stations = await getAllStations();
  //       // setStations(stations);
  //       setIsLoading(false);
  //     } catch (error) {
  //       console.error("Failed to fetch locations:", error);
  //       setIsLoading(false);
  //     }
  //   };

  //   const loadRecentSearches = () => {
  //     try {
  //       const savedSearches = localStorage.getItem("recentSearches");
  //       if (savedSearches) {
  //         const parsedSearches = JSON.parse(savedSearches);

  //         const sortedSearches = parsedSearches.sort(
  //           (a, b) => b.createdAt - a.createdAt
  //         );
  //         // Get only the 4 most recent searches
  //         setRecentSearches(sortedSearches.slice(0, 4));
  //       }
  //     } catch (error) {
  //       console.error("Failed to load recent searches:", error);
  //     }
  //   };

  //   fetchLocations();
  //   loadRecentSearches();
  // }, []);

  // const selectRecentSearch = (search) => {
  //   form.setValue("searchText", `${search.departure} - ${search.destination}`);

  //   // Parse the date
  //   const [day, month, year] = search.departureDate.split("/").map(Number);
  //   const date = new Date(year, month - 1, day);
  //   form.setValue("fromDate", format(date, "yyyy-MM-dd"));
  //   form.setValue("toDate", format(date, "yyyy-MM-dd"));
  // };

  // const onSubmit = (data) => {
  //   const existingSearchesJSON = localStorage.getItem("recentSearches");
  //   let existingSearches = [];

  //   if (existingSearchesJSON) {
  //     try {
  //       existingSearches = JSON.parse(existingSearchesJSON);
  //     } catch (error) {
  //       console.error("Error parsing recent searches:", error);
  //     }
  //   }

  //   const updatedSearches = [
  //     {
  //       id: Date.now().toString(),
  //       searchText: data.searchText,
  //       fromDate: format(new Date(data.fromDate), "dd/MM/yyyy"),
  //       toDate: format(new Date(data.toDate), "dd/MM/yyyy"),
  //       createdAt: Date.now(),
  //     },
  //     ...existingSearches,
  //   ];
  //   const limitedSearches = updatedSearches.slice(0, 5);

  //   localStorage.setItem("recentSearches", JSON.stringify(limitedSearches));
  //   setRecentSearches(limitedSearches.slice(0, 4));

  //   // Call the onSearch callback with the form data
  //   // onSearch(data.searchText, data.fromDate, data.toDate);
  // };

  return (
    <section
      id="search-form"
      className="w-full max-w-7xl mx-auto my-16 px-4 md:px-6"
    >
      <Breadcrumb className="mb-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="text-base hover:text-primary" href="/">Trang chủ</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link className="font-bold text-base hover:text-primary" href="/bai-viet">Bài viết</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <h1 className="text-4xl font-bold text-primary mb-8">
        Thư viện bài viết
      </h1>

      <Card className="border-2 rounded-xl shadow-sm">
        <CardHeader>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-primary">Tìm bài viết</h2>
          </div>
        </CardHeader>

        <CardContent className="space-y-0">
          <Form {...form}>
            <form onSubmit={() => {}} className="space-y-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 md:gap-6 w-full flex-2">
                  <FormField
                    control={form.control}
                    name="searchText"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormLabel className="font-medium">Từ khoá</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground size-4" />
                            <Input
                              {...field}
                              placeholder="Tìm kiếm bài viết theo từ khóa"
                              className="h-12 pl-10"
                            />
                          </div>
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex items-center gap-4 md:gap-4 w-full flex-1">
                  {/* From Date */}
                  <FormField
                    control={form.control}
                    name="fromDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormLabel className="font-medium">Từ ngày</FormLabel>
                        <FormControl>
                          <DatePicker
                            className="h-12"
                            date={
                              field.value ? new Date(field.value) : undefined
                            }
                            setDate={(date) => {
                              const isoDate = format(date, "yyyy-MM-dd");
                              form.setValue("fromDate", isoDate);
                              field.onChange(isoDate);
                            }}
                            // startYear={getYear(new Date())}
                            dateRestriction="future"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  {/* To Date */}
                  <FormField
                    control={form.control}
                    name="toDate"
                    render={({ field }) => (
                      <FormItem className="flex flex-col flex-1">
                        <FormLabel className="font-medium">Đến ngày</FormLabel>
                        <FormControl>
                          <DatePicker
                            className="h-12"
                            date={
                              field.value ? new Date(field.value) : undefined
                            }
                            setDate={(date) => {
                              const isoDate = format(date, "yyyy-MM-dd");
                              form.setValue("toDate", isoDate);
                              field.onChange(isoDate);
                            }}
                            // startYear={getYear(new Date())}
                            dateRestriction="future"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </form>
          </Form>

          <RecentSearchList
          // recentSearches={recentSearches}
          // selectRecentSearch={selectRecentSearch}
          // clearRecentSearches={() => {
          //   localStorage.removeItem("recentSearches");
          //   setRecentSearches([]);
          // }}
          />
        </CardContent>

        <CardFooter className="relative flex lg:justify-end justify-center">
          <div className="absolute top-1/2 flex gap-2">
            <Button
              type="reset"
              onClick={() => {
                form.reset();
              }}
              className="min-w-[150px] px-10 py-6 border-2 shadow-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-base"
            >
              Làm lại
            </Button>
            <Button
              type="submit"
              onClick={() => {}}
              className="min-w-[150px] px-10 py-6 border-2 shadow-sm bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full text-base"
            >
              Tìm bài viết
            </Button>
          </div>
        </CardFooter>
      </Card>
    </section>
  );
}
