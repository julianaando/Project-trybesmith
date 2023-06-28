export default function mapStatusHTTP(status: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNPROCESSABLE_DATA: 422,
  };
  return statusHTTPMap[status] ?? 500;
}