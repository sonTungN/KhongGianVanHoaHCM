import { Button } from "@/components/ui/button";
// import { RecentSearch } from "@/types/search-ticket-form";
import { Trash2 } from "lucide-react";
import React from "react";

function RecentSearchList() {
  return (
    <div className="pt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Tìm kiếm gần đây</h3>
        <Button variant="outline" onClick={() => {}}>
          <Trash2 className="size-4" />
          Xóa tìm kiếm gần đây
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-2">
        {/* {recentSearches.length > 0 ? (
          recentSearches.map((search) => (
            <div
              key={search.id}
              onClick={() => selectRecentSearch(search)}
              className="border rounded-lg p-3 cursor-pointer hover:bg-secondary/10 transition-colors"
            >
              <div className="font-medium text-sm">
                {search.departure} - {search.destination}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {search.departureDate} • {search.departureTime}
              </div>
            </div>
          ))
        ) : (
          <div className="text-sm text-muted-foreground">
            No recent searches
          </div>
        )} */}
      </div>
    </div>
  );
}

export default RecentSearchList;
