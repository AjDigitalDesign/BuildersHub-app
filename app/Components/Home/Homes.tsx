import { getClient } from "@/lib/client";
import { getHomes } from "@/lib/queries/getHomes";
import { Slice } from "lucide-react";
import Image from "next/image";

async function Homes() {
  const { data } = await getClient().query({ query: getHomes });

  const featuredHomes = data.homes.nodes
    .filter(
      (item: { qmi_acf_fields: { featuredHome: string } }) =>
        item.qmi_acf_fields.featuredHome
    )
    .slice(0, 3);

  console.log(featuredHomes);

  return (
    <div className="px-4 my-6">
      <div>
        <div>
          <h2>Featured Quick Move-Ins</h2>
        </div>
      </div>

      <div>
        {featuredHomes.map((home) => (
          <div key={home.id}>
            <div>
              <Image
                src={home.qmi_acf_fields.photos[0].mediaItemUrl}
                width={400}
                height={400}
                alt="test"
              />
              <div>
                {home.qmi_acf_fields.homeAnnouncementsGroup
                  .homeAnnouncementsToggle ? (
                  <div>
                    <span>
                      {
                        home.qmi_acf_fields.homeAnnouncementsTextGroup
                          .homeCustomAnnouncements
                      }
                    </span>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homes;
