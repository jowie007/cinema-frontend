import { PageLayout } from "../../layout/page-layout";
import { SeatsSelection } from "../../specific/seats-selection";
import "./seats-page.styles.scss";

export function SeatsPage() {
  return (
    <PageLayout>
      <div className="seatsPage">
        <SeatsSelection />
      </div>
    </PageLayout>
  );
}
