"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditShortLinkPage() {
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [record, setRecord] = useState<Record<string, unknown> | null>(null);
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    async function fetchRecord() {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("short_links")
        .select("*")
        .eq("id", params.id)
        .single();

      if (error) setError(error.message);
      else setRecord(data);
      setFetching(false);
    }
    fetchRecord();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const supabase = createClient();

    const updates: Record<string, unknown> = {
      original_url: formData.get("original_url"),
      short_code: formData.get("short_code"),
      custom_alias: formData.get("custom_alias"),
      title: formData.get("title"),
      domain: formData.get("domain"),
      click_count: formData.get("click_count") ? Number(formData.get("click_count")) : null,
      status: formData.get("status"),
      expiry_date: formData.get("expiry_date"),
      qr_code_url: formData.get("qr_code_url"),
      tags: formData.get("tags"),
      campaign_id: formData.get("campaign_id"),
    };

    const { error: updateError } = await supabase
      .from("short_links")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/short-links");
      router.refresh();
    }
  };

  if (fetching) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-brand-200 border-t-brand-600" />
      </div>
    );
  }

  if (!record) {
    return (
      <div className="rounded-lg bg-red-50 border border-red-200 p-4">
        <p className="text-sm text-red-700">Short Link not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/short-links" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Short Links
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Short Link</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="original_url" className="label">Original Url</label>
          <input id="original_url" name="original_url" type="url" className="input" defaultValue={String(record.original_url ?? "")} required />
        </div>
        <div>
          <label htmlFor="short_code" className="label">Short Code</label>
          <input id="short_code" name="short_code" type="text" className="input" defaultValue={String(record.short_code ?? "")} required />
        </div>
        <div>
          <label htmlFor="custom_alias" className="label">Custom Alias</label>
          <input id="custom_alias" name="custom_alias" type="text" className="input" defaultValue={String(record.custom_alias ?? "")} />
        </div>
        <div>
          <label htmlFor="title" className="label">Title</label>
          <input id="title" name="title" type="text" className="input" defaultValue={String(record.title ?? "")} />
        </div>
        <div>
          <label htmlFor="domain" className="label">Domain</label>
          <input id="domain" name="domain" type="text" className="input" defaultValue={String(record.domain ?? "")} />
        </div>
        <div>
          <label htmlFor="click_count" className="label">Click Count</label>
          <input id="click_count" name="click_count" type="number" className="input" defaultValue={String(record.click_count ?? "")} />
        </div>
        <div>
          <label htmlFor="status" className="label">Status</label>
          <input id="status" name="status" type="text" className="input" defaultValue={String(record.status ?? "")} />
        </div>
        <div>
          <label htmlFor="expiry_date" className="label">Expiry Date</label>
          <input id="expiry_date" name="expiry_date" type="datetime-local" className="input" defaultValue={String(record.expiry_date ?? "")} />
        </div>
        <div>
          <label htmlFor="qr_code_url" className="label">Qr Code Url</label>
          <input id="qr_code_url" name="qr_code_url" type="url" className="input" defaultValue={String(record.qr_code_url ?? "")} />
        </div>
        <div>
          <label htmlFor="tags" className="label">Tags</label>
          <input id="tags" name="tags" type="text" className="input" defaultValue={String(record.tags ?? "")} />
        </div>
        <div>
          <label htmlFor="campaign_id" className="label">Campaign Id</label>
          <input id="campaign_id" name="campaign_id" type="text" className="input" defaultValue={String(record.campaign_id ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Short Link"}
          </button>
          <Link href="/dashboard/short-links" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
