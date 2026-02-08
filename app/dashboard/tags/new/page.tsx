"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function NewTagPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();

    const record: Record<string, unknown> = {
      user_id: user?.id,
      name: formData.get("name"),
      color: formData.get("color"),
      link_count: formData.get("link_count") ? Number(formData.get("link_count")) : null,
    };

    const { error: insertError } = await supabase.from("tags").insert(record);

    if (insertError) {
      setError(insertError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/tags");
      router.refresh();
    }
  };

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/tags" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Tags
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Add Tag</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="name" className="label">Name</label>
          <input id="name" name="name" type="text" className="input" placeholder="Enter name" required />
        </div>
        <div>
          <label htmlFor="color" className="label">Color</label>
          <input id="color" name="color" type="text" className="input" placeholder="Enter color" />
        </div>
        <div>
          <label htmlFor="link_count" className="label">Link Count</label>
          <input id="link_count" name="link_count" type="number" className="input" placeholder="Enter link count" />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Create Tag"}
          </button>
          <Link href="/dashboard/tags" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
