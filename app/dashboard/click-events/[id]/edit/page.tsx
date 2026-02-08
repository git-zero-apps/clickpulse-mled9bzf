"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter, useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function EditClickEventPage() {
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
        .from("click_events")
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
      link_id: formData.get("link_id"),
      clicked_at: formData.get("clicked_at"),
      referrer_url: formData.get("referrer_url"),
      country: formData.get("country"),
      city: formData.get("city"),
      device_type: formData.get("device_type"),
      browser: formData.get("browser"),
      os: formData.get("os"),
      ip_address: formData.get("ip_address"),
      user_agent: formData.get("user_agent"),
    };

    const { error: updateError } = await supabase
      .from("click_events")
      .update(updates)
      .eq("id", params.id);

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
    } else {
      router.push("/dashboard/click-events");
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
        <p className="text-sm text-red-700">Click Event not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <Link href="/dashboard/click-events" className="text-sm text-gray-500 hover:text-gray-700 mb-2 inline-flex items-center gap-1">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Click Events
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Edit Click Event</h1>
      </div>

      {error && (
        <div className="mb-6 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="card space-y-6">
        <div>
          <label htmlFor="link_id" className="label">Link Id</label>
          <input id="link_id" name="link_id" type="text" className="input" defaultValue={String(record.link_id ?? "")} required />
        </div>
        <div>
          <label htmlFor="clicked_at" className="label">Clicked At</label>
          <input id="clicked_at" name="clicked_at" type="datetime-local" className="input" defaultValue={String(record.clicked_at ?? "")} />
        </div>
        <div>
          <label htmlFor="referrer_url" className="label">Referrer Url</label>
          <input id="referrer_url" name="referrer_url" type="url" className="input" defaultValue={String(record.referrer_url ?? "")} />
        </div>
        <div>
          <label htmlFor="country" className="label">Country</label>
          <input id="country" name="country" type="text" className="input" defaultValue={String(record.country ?? "")} />
        </div>
        <div>
          <label htmlFor="city" className="label">City</label>
          <input id="city" name="city" type="text" className="input" defaultValue={String(record.city ?? "")} />
        </div>
        <div>
          <label htmlFor="device_type" className="label">Device Type</label>
          <input id="device_type" name="device_type" type="text" className="input" defaultValue={String(record.device_type ?? "")} />
        </div>
        <div>
          <label htmlFor="browser" className="label">Browser</label>
          <input id="browser" name="browser" type="text" className="input" defaultValue={String(record.browser ?? "")} />
        </div>
        <div>
          <label htmlFor="os" className="label">Os</label>
          <input id="os" name="os" type="text" className="input" defaultValue={String(record.os ?? "")} />
        </div>
        <div>
          <label htmlFor="ip_address" className="label">Ip Address</label>
          <input id="ip_address" name="ip_address" type="text" className="input" defaultValue={String(record.ip_address ?? "")} />
        </div>
        <div>
          <label htmlFor="user_agent" className="label">User Agent</label>
          <input id="user_agent" name="user_agent" type="text" className="input" defaultValue={String(record.user_agent ?? "")} />
        </div>

        <div className="flex items-center gap-3 pt-4 border-t">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? "Saving..." : "Update Click Event"}
          </button>
          <Link href="/dashboard/click-events" className="btn-secondary">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
